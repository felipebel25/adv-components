import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your Name" />
      <Input id="age" label="Your age" type="number" />

      <Button el="anchor" href="https://youtube.com">
        A link
      </Button>
      <Button el="button">Button</Button>
    </main>
  );
}

export default App;
