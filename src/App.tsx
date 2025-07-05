import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Input id="name" label="Your Name" />
      <Input id="age" label="Your age" type="number" />

      <Button el="anchor" href="https://youtube.com">
        A link
      </Button>
      <Container onClick={() => console.log('sad')} as={Button}>Holas</Container>
      <Button el="button">Button</Button>
    </main>
  );
}

export default App;
