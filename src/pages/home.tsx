import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <Card>
      <Input placeholder="Enter name" />
      <Button className="mt-4">Submit</Button>
    </Card>
  );
}
