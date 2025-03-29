import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import User from "../components/dashboard";
export default function Dashboard() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-white flex justify-center items-center">
        <User />
      </main>
    </QueryClientProvider>
  );
}
