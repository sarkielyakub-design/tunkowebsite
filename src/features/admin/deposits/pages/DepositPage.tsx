"use client";

import { useMemo, useState } from "react";

import DepositStatistics from "../components/DepositStatistics";
import DepositFilters from "../components/DepositFilters";
import DepositTable from "../components/DepositTable";
import DepositDetailsDrawer from "../components/DepositDetailsDrawer";

import ApproveDepositDialog from "../components/ApproveDepositDialog";
import RejectDepositDialog from "../components/RejectDepositDialog";
import CancelDepositDialog from "../components/CancelDepositDialog";

import {
    useDeposits,
    useDepositStatistics,
    useApproveDeposit,
    useRejectDeposit,
    useCancelDeposit,
} from "../hooks/useDeposits";

import {
    Deposit,
    DepositFilters as DepositFiltersType,
} from "../types/deposit";

export default function DepositPage() {
    const [filters, setFilters] = useState<DepositFiltersType>({
        search: "",
        status: "",
        gateway: "",
        page: 1,
    });

    const [selectedDeposit, setSelectedDeposit] =
        useState<Deposit | null>(null);

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [approveOpen, setApproveOpen] = useState(false);
    const [rejectOpen, setRejectOpen] = useState(false);
    const [cancelOpen, setCancelOpen] = useState(false);

    const depositsQuery = useDeposits(filters);

const statisticsQuery = useDepositStatistics();

const approveMutation = useApproveDeposit();

const rejectMutation = useRejectDeposit();

const cancelMutation = useCancelDeposit();const deposits = useMemo(
    () => depositsQuery.data?.data ?? [],
    [depositsQuery.data]
);

const statistics =
    statisticsQuery.data?.data;const handleView = (deposit: Deposit) => {
    setSelectedDeposit(deposit);
    setDrawerOpen(true);
};

const handleApprove = (deposit: Deposit) => {
    setSelectedDeposit(deposit);
    setApproveOpen(true);
};

const handleReject = (deposit: Deposit) => {
    setSelectedDeposit(deposit);
    setRejectOpen(true);
};

const handleCancel = (deposit: Deposit) => {
    setSelectedDeposit(deposit);
    setCancelOpen(true);
};const approveDeposit = (note: string) => {
    if (!selectedDeposit) return;

    approveMutation.mutate(
        {
            id: selectedDeposit.id,
            payload: {
                gateway_reference:
                    selectedDeposit.gateway_reference ?? "",
                provider_status:
                    selectedDeposit.provider_status ?? "",
                note,
            },
        },
        {
            onSuccess() {
                setApproveOpen(false);

                depositsQuery.refetch();

                statisticsQuery.refetch();
            },
        }
    );
};const rejectDeposit = (reason: string) => {
    if (!selectedDeposit) return;

    rejectMutation.mutate(
        {
            id: selectedDeposit.id,
            payload: {
                reason,
                reject_code: "ADMIN_REJECTED",
            },
        },
        {
            onSuccess() {
                setRejectOpen(false);

                depositsQuery.refetch();

                statisticsQuery.refetch();
            },
        }
    );
};const cancelDeposit = (reason: string) => {
    if (!selectedDeposit) return;

    cancelMutation.mutate(
        {
            id: selectedDeposit.id,
            payload: {
                reason,
                cancel_code: "ADMIN_CANCELLED",
            },
        },
        {
            onSuccess() {
                setCancelOpen(false);

                depositsQuery.refetch();

                statisticsQuery.refetch();
            },
        }
    );
};
return (
    <div className="space-y-6">

        <DepositStatistics
            statistics={statistics}
            loading={statisticsQuery.isLoading}
            error={statisticsQuery.isError}
        />

        <DepositFilters
            filters={filters}
            onChange={setFilters}
        />

        <DepositTable
            deposits={deposits}
            onView={handleView}
            onApprove={handleApprove}
            onReject={handleReject}
            onCancel={handleCancel}
        />

        <DepositDetailsDrawer
            open={drawerOpen}
            onOpenChange={setDrawerOpen}
            deposit={selectedDeposit}
        />

        <ApproveDepositDialog
            open={approveOpen}
            deposit={selectedDeposit}
            loading={approveMutation.isPending}
            onClose={() => setApproveOpen(false)}
            onApprove={approveDeposit}
        />

        <RejectDepositDialog
            open={rejectOpen}
            deposit={selectedDeposit}
            loading={rejectMutation.isPending}
            onClose={() => setRejectOpen(false)}
            onReject={rejectDeposit}
        />

        <CancelDepositDialog
            open={cancelOpen}
            deposit={selectedDeposit}
            loading={cancelMutation.isPending}
            onClose={() => setCancelOpen(false)}
            onCancel={cancelDeposit}
        />

    </div>
    );
}