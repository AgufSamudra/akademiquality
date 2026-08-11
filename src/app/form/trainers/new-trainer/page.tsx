import type { Metadata } from "next";

import { RegistrationForm } from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Pendaftaran Trainer",
  robots: { index: false, follow: false },
};

export default function TrainerRegistrationPage() {
  return <RegistrationForm type="trainer" />;
}
