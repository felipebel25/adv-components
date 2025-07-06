import { createRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Form, FormMethods } from "./components/Form";

function App() {
  const ref = createRef<HTMLInputElement>();
  const methodsRef = createRef<FormMethods>();

  const onSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    methodsRef.current?.clean();
  };

  return (
    <main>
      <Form onSave={onSave} ref={methodsRef}>
        <Input id="name" label="Your Name" />
        <Input id="age" label="Your age" type="number" ref={ref} />

        <Button el="button">Button</Button>
      </Form>
    </main>
  );
}

export default App;
