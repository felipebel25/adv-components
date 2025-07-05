import { createRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Form } from "./components/Form";

function App() {
  const ref = createRef<HTMLInputElement>();
  const onSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  };
  return (
    <main>
      <Form onSave={onSave}>
        <Input id="name" label="Your Name" />
        <Input id="age" label="Your age" type="number" ref={ref} />

        <Button el="button">Button</Button>
      </Form>
    </main>
  );
}

export default App;
