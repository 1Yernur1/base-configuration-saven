import { Button } from "@/shared/components/ui/button";

export const Home = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <Button
        onClick={() => {
          throw new Error("This is error");
        }}
      >
        Click me
      </Button>
    </div>
  );
};
