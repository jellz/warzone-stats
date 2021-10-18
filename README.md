## Warzone Stats

Warzone Stats is a Discord bot for displaying information about [Warzone](https://warzone.network) or other [TGM](https://github.com/Warzone/TGM) servers if self-hosted.

If you find a bug or have any feature requests feel free to [make an issue here](https://github.com/jellz/warzone-stats/issues)

You can invite the hosted bot to your own server [here](https://discord.com/oauth2/authorize?client_id=520815160768724997&scope=bot&permissions=8192)

### Self-hosting

The bot is designed to work with any TGM server with environment variables. The environment variables the bot uses are detailed below. Please don't use the bot name "Warzone Stats" on self-hosted instances.

| Name                      | Description                                                            | Example                                 | Required? |
| ------------------------- | ---------------------------------------------------------------------- | --------------------------------------- | --------- |
| `DISCORD_TOKEN`           | The Discord bot token                                                  |                                         | Yes       |
| `LOADING_EMOJI`           | The emoji to use for loading                                           | `<a:loading:811950559991955546>`        | Yes       |
| `STAFF_ROLES`             | List of staff role IDs separated by comma                              | `333671781942427658,335883420817162241` | No        |
| `STAFF_PING_EXEMPT_USERS` | List of user IDs exempt to pings from staff command separated by comma | `144607902525554688,293089779912933396` | No        |
| `API_BASE`                | TGM API base URL                                                       | `https://api.warzone.network`           | No        |
| `EVALERS`                 | List of user IDs who can use the eval command separated by comma       | `399406110261641216`                    | No        |
