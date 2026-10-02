import { messages } from "@/lib/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { deleteMessageAction } from "./actions";

export default function MessagesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Pesan Masuk</h1>

      <div className="mt-8 space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">Belum ada pesan masuk.</p>
        ) : (
          messages.map((msg) => (
            <Card
              key={msg.id}
              className="border border-white/10 bg-foreground/3 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20"
            >
              <CardHeader>
                <CardTitle>{msg.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{msg.email}</p>
              </CardHeader>

              <CardContent>
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                  {msg.message}
                </p>
              </CardContent>

              <CardFooter className="justify-end">
                <form action={deleteMessageAction.bind(null, msg.id)}>
                  <Button
                    type="submit"
                    variant="destructive"
                    className="border-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-destructive/20"
                  >
                    <Trash2 aria-hidden="true" />
                    Hapus
                  </Button>
                </form>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}