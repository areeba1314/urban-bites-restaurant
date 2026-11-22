import { describe, expect, it } from "vitest";

import { reservationSchema, todayISO } from "@/lib/reservation";

const valid = {
  name: "Ayesha Khan",
  email: "ayesha@example.com",
  phone: "+92 300 1234567",
  date: todayISO(),
  time: "20:00",
  guests: "4",
};

describe("reservation form rules", () => {
  it("accepts a complete booking for today", () => {
    expect(reservationSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a date in the past", () => {
    expect(reservationSchema.safeParse({ ...valid, date: "2020-01-01" }).success).toBe(false);
  });

  it("rejects more than 12 guests", () => {
    expect(reservationSchema.safeParse({ ...valid, guests: "13" }).success).toBe(false);
  });

  it("rejects an invalid email", () => {
    expect(reservationSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
});
