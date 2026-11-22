import { z } from "zod";

export const MAX_GUESTS = 12;

function todayISO() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  return new Date(d.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

export const reservationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{10,16}$/, "Please enter a valid phone number"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a date")
    .refine((value) => value >= todayISO(), "Date can't be in the past"),
  time: z.string().min(1, "Please choose a time"),
  guests: z.coerce
    .number()
    .int()
    .min(1, "At least 1 guest")
    .max(MAX_GUESTS, `For more than ${MAX_GUESTS} guests, please call us`),
});

export type ReservationInput = z.input<typeof reservationSchema>;
export type Reservation = z.output<typeof reservationSchema>;

export { todayISO };
