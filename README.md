### Installing the AWS Amplify CLI

Next, we'll install the AWS Amplify CLI:

```bash
npm install -g @aws-amplify/cli
```
> If your installation fails. Try `npm install -g @aws-amplify/cli --unsafe-perm=true`.
> If you have issues related to fsevents with npm install. Try: `npm audit fix --force`.

Sign-in as IAM user in AWS console, [here](https://357003500481.signin.aws.amazon.com/console)

Now we need to configure the CLI with our credentials:

```js
amplify configure
```

> If you'd like to see a video walkthrough of this configuration process, click [here](https://www.youtube.com/watch?v=fWbM5DLh25U).

Here we'll walk through the `amplify configure` setup. Once you've signed in to the AWS console, continue:
- Specify the AWS Region: __us-east-1 (N.Virginia)__
- Specify the username of the new IAM user: __amplify-yourName__
> In the AWS Console, click __Next: Permissions__, __Next: Tags__, __Next: Review__, & __Create User__ to create the new IAM user. Then, return to the command line & press Enter.
- Enter the access key of the newly created user:   
  accessKeyId: __(<YOUR_ACCESS_KEY_ID>)__   
  secretAccessKey:  __(<YOUR_SECRET_ACCESS_KEY>)__
- Profile Name: __enfase2-yourName__

> To view the new created IAM User go to the dashboard at [https://console.aws.amazon.com/iam/home#/users/](https://console.aws.amazon.com/iam/home#/users/). Also be sure that your region matches your selection.

## Examples

- [Relay & GraphQL - Monorepo](https://github.com/enfase/exemplos/tree/graphql-relay-monorepo)
- [React Native - Monorepo](https://github.com/enfase/exemplos/tree/react-native-monorepo)
- [React, Node & Postgres - Monorepo](https://github.com/enfase/exemplos/tree/react-node-postgres-monorepo)
- [React - Context API](https://github.com/enfase/exemplos/tree/react-context-api)
