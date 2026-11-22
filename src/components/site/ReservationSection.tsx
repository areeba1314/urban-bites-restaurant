import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck } from "lucide-react";
import { toast } from "sonner";

import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { reservationTimes } from "@/data/restaurant";
import {
  MAX_GUESTS,
  reservationSchema,
  todayISO,
  type Reservation,
  type ReservationInput,
} from "@/lib/reservation";

const fieldClass = "h-12 rounded-xl border-input bg-secondary/60 px-4 text-base focus-visible:ring-primary";
const selectClass =
  "h-12 w-full cursor-pointer rounded-xl border border-input bg-secondary/60 px-4 text-base text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary";

function formatTime(value: string) {
  const [h = 0, m = 0] = value.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${suffix}`;
}

export function ReservationSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationInput, unknown, Reservation>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { name: "", email: "", phone: "", date: "", time: "", guests: 2 },
  });

  // No backend yet: this only confirms on screen. Connect a booking service here later.
  const onSubmit = (data: Reservation) => {
    toast.success(`Thanks, ${data.name.split(" ")[0]}! Your table request is received.`, {
      description: `${data.guests} guest${data.guests > 1 ? "s" : ""} on ${data.date} at ${formatTime(data.time)}. (Demo — no booking was sent.)`,
    });
    reset();
  };

  return (
    <section id="reservations" className="relative overflow-hidden border-y border-border bg-card py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[28rem] rounded-full bg-primary/15 blur-3xl" />
      <div className="container-page relative grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Reservations"
            title="Save your seat at the table"
            description="Planning a date night, family dinner or a get-together with friends? Book ahead and we'll have your table ready."
          />
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-background/60 p-5">
            <CalendarCheck className="mt-0.5 size-6 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              For groups larger than {MAX_GUESTS} or private events, please call us directly. We hold
              tables for 15 minutes after the booking time.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="grid gap-5 rounded-3xl border border-border bg-background p-6 shadow-card sm:grid-cols-2 sm:p-8"
        >
          <Field label="Full name" htmlFor="name" error={errors.name?.message} className="sm:col-span-2">
            <Input id="name" autoComplete="name" placeholder="Ayesha Khan" className={fieldClass} {...register("name")} />
          </Field>

          <Field label="Email" htmlFor="email" error={errors.email?.message}>
            <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} {...register("email")} />
          </Field>

          <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
            <Input id="phone" type="tel" autoComplete="tel" placeholder="+92 300 1234567" className={fieldClass} {...register("phone")} />
          </Field>

          <Field label="Date" htmlFor="date" error={errors.date?.message}>
            <Input id="date" type="date" min={todayISO()} className={`${fieldClass} [color-scheme:dark]`} {...register("date")} />
          </Field>

          <Field label="Time" htmlFor="time" error={errors.time?.message}>
            <select id="time" className={selectClass} {...register("time")}>
              <option value="">Select a time</option>
              {reservationTimes.map((t) => (
                <option key={t} value={t}>
                  {formatTime(t)}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Number of guests" htmlFor="guests" error={errors.guests?.message} className="sm:col-span-2">
            <select id="guests" className={selectClass} {...register("guests")}>
              {Array.from({ length: MAX_GUESTS }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </Field>

          <Button type="submit" variant="hero" size="xl" disabled={isSubmitting} className="mt-2 sm:col-span-2">
            Book a Table
          </Button>
          <p className="text-center text-xs text-muted-foreground sm:col-span-2">
            Demo form — reservations are not sent anywhere yet.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
