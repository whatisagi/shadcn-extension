# Shadcn-Extension

A CLI (inspired by shadcn-ui) for adding components to your project, making it easier to integrate and manage UI components within your codebase.

## Installation

To get started with the `shadcn-Extension` CLI, ensure you have `npx` installed. This tool allows you to run packages directly from npm without globally installing them.

> ## NOTE
>
> ALL TYPES PACKAGES FOR NOW NEEDS TO BE INSTALLED MANUALLY

## Usage

### Initializing a New Project

Use the `init` command to initialize dependencies for a new project. This command sets up everything you need, including installing necessary dependencies, adding the `cn` utility, configuring `tailwind.config.js`, and setting up CSS variables.

1. **Initialize Dependencies**

   Run the following command to initialize the project:

   ```bash
   npx shadcn-ui init
   ```

2. **Initialize Shadcn-Extension CLI**

   Next, set up your project with the shadcn-extension CLI:

   ```bash
   npx @shadx/cli init
   ```

### Adding Components

Use the `add` command to add components to your project. This command installs the required dependencies and integrates the specified component into your project.

1. **Add a Specific Component**

   To add a specific component, specify the component name:

   ```bash
   npx @shadx/cli add [component]
   ```

   **Example:**

   Adding a `tree-view` component:

   ```bash
   npx @shadx/cli add tree-view
   ```

2. **View Available Components**

   If you want to see a list of all available components, run the `add` command without any arguments:

   ```bash
   npx @shadx/cli add
   ```

   This will display a list of components that you can add to your project.

## Full Documentation

For detailed documentation, including installation guides, component usage, and more, visit the [shadcn-Extension Documentation](https://shadcn-extension.vercel.app/docs/installation).

## License

This project is licensed under the [MIT license](https://github.com/BelkacemYerfa/shadcn-extension/blob/master/packages/cli/LICENSE.md).

## Contributing

Contributions are welcome! If you have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/BelkacemYerfa/shadcn-extension).
