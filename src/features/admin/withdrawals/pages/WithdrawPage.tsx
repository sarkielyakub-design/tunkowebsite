"use client";

import { useMemo, useState } from "react";

import WithdrawStatistics from "../components/WithdrawStatistics";
import WithdrawFilters from "../components/WithdrawalFilters";
import WithdrawTable from "../components/WithdrawTable";
import WithdrawDetailsDrawer from "../components/WithdrawDetailsDrawer";
import ApproveWithdrawalModal from "../components/ApproveWithdrawalModal";
import RejectWithdrawalModal from "../components/RejectWithdrawalModal";
import CancelWithdrawalModal from "../components/CancelWithdrawalModal";
import RetryWithdrawalModal from "../components/RetryWithdrawalModal";

import {
  useWithdrawals,
  useApproveWithdrawal,
  useRejectWithdrawal,
  useCancelWithdrawal,
  useRetryWithdrawal,
} from "../hooks/useWithdrawals";

import { Withdrawal, WithdrawalFilters } from "../api/types";

export default function WithdrawPage() {
  const [filters, setFilters] = useState<WithdrawalFilters>({});

  const [selected, setSelected] = useState<Withdrawal | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [cancelOpen, setCancelOpen] = useState(false);
  const [retryOpen, setRetryOpen] = useState(false);

  const { data, isLoading } = useWithdrawals(filters);

  const approveMutation = useApproveWithdrawal();
  const rejectMutation = useRejectWithdrawal();
  const cancelMutation = useCancelWithdrawal();
  const retryMutation = useRetryWithdrawal();

  const withdrawals = useMemo(() => {
    return data?.data?.data ?? [];
  }, [data]);

  return (
    <div className="space-y-6">

      <WithdrawStatistics />

      <WithdrawFilters
        filters={filters}
        onChange={setFilters}
      />

      <WithdrawTable
        withdrawals={withdrawals}
        loading={isLoading}
        onView={(item) => {
          setSelected(item);
          setDrawerOpen(true);
        }}
        onApprove={(item) => {
          setSelected(item);
          setApproveOpen(true);
        }}
        onReject={(item) => {
          setSelected(item);
          setRejectOpen(true);
        }}
        onCancel={(item) => {
          setSelected(item);
          setCancelOpen(true);
        }}
        onRetry={(item) => {
          setSelected(item);
          setRetryOpen(true);
        }}
      />

      <WithdrawDetailsDrawer
        open={drawerOpen}
        withdrawal={selected}
        onClose={() => setDrawerOpen(false)}
      />

      <ApproveWithdrawalModal
        open={approveOpen}
        withdrawal={selected}
        loading={approveMutation.isPending}
        onClose={() => setApproveOpen(false)}
        onSubmit={(payload) => {
          if (!selected) return;

          approveMutation.mutate(
            {
              id: selected.id,
              payload,
            },
            {
              onSuccess: () => {
                setApproveOpen(false);
              },
            }
          );
        }}
      />

      <RejectWithdrawalModal
        open={rejectOpen}
        withdrawal={selected}
        loading={rejectMutation.isPending}
        onClose={() => setRejectOpen(false)}
        onSubmit={(payload) => {
          if (!selected) return;

          rejectMutation.mutate(
            {
              id: selected.id,
              payload,
            },
            {
              onSuccess: () => {
                setRejectOpen(false);
              },
            }
          );
        }}
      />

      <CancelWithdrawalModal
        open={cancelOpen}
        withdrawal={selected}
        loading={cancelMutation.isPending}
        onClose={() => setCancelOpen(false)}
        onSubmit={(payload) => {
          if (!selected) return;

          cancelMutation.mutate(
            {
              id: selected.id,
              payload,
            },
            {
              onSuccess: () => {
                setCancelOpen(false);
              },
            }
          );
        }}
      />

      <RetryWithdrawalModal
        open={retryOpen}
        withdrawal={selected}
        loading={retryMutation.isPending}
        onClose={() => setRetryOpen(false)}
        onSubmit={(payload) => {
          if (!selected) return;

          retryMutation.mutate(
            {
              id: selected.id,
              payload,
            },
            {
              onSuccess: () => {
                setRetryOpen(false);
              },
            }
          );
        }}
      />

    </div>
  );
}