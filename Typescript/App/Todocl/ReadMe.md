

### **Step 1 – Setup your project**

1. Create a new folder and initialize a Node.js project:

```bash
mkdir todo-cli
cd todo-cli
npm init -y
```

2. Install TypeScript and Node type definitions:

```bash
npm install typescript ts-node @types/node
```

3. Initialize TypeScript config:

```bash
npx tsc --init
```

**Question:**
Do you already know how to run a TypeScript file with `ts-node`?


No problem — I’ll show you simply.

Once you have your TypeScript file, say `todo.ts`, you can **run it in the terminal** without compiling manually using `ts-node`:

```bash
npx ts-node todo.ts
```

* `npx` runs a package without installing it globally.
* `ts-node` reads your TypeScript file and executes it directly.
* You don’t need to run `tsc` and then `node` separately.

Example:

1. Create a file `todo.ts`:

```ts
console.log("Hello from TypeScript!");
```

2. Run it:

```bash
npx ts-node todo.ts
```

You should see:

```
Hello from TypeScript!
```

---

Next step: we can **define a Todo type and state in memory**.

Do you want me to guide you through that now?
