import api from "@/lib/api";

export const WebsiteService = {
  getHome: () => api.get("/website/home"),

  getSettings: () => api.get("/website/settings"),

  getCountries: () => api.get("/countries"),

  getServices: () => api.get("/services"),

  getExchangeRates: () => api.get("/exchange-rates"),

  getFaqs: () => api.get("/faqs"),

  getTestimonials: () => api.get("/testimonials"),
};