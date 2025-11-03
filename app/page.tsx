import { Button } from "./_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "./_components/header";

const Home = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Bem-vindo ao Finance AI
            </h1>
            <p className="text-muted-foreground">
              Sua plataforma de gestão financeira inteligente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Transações</h3>
              <p className="text-muted-foreground mb-4">
                Gerencie suas receitas e despesas
              </p>
              <Button className="w-full">Ver Transações</Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Relatórios</h3>
              <p className="text-muted-foreground mb-4">
                Visualize seus dados financeiros
              </p>
              <Button variant="secondary" className="w-full">
                Ver Relatórios
              </Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Insights IA</h3>
              <p className="text-muted-foreground mb-4">
                Receba recomendações personalizadas
              </p>
              <Button variant="outline" className="w-full">
                Ver Insights
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
