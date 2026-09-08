import { createFileRoute } from "@tanstack/react-router";
import { KitApp } from "@/components/kit/kit-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <KitApp />;
}
