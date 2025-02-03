# TEA FI TX BOT

Tea-FI Beta Test (RETRO) is Live
Reward pool 8.000.000 $TEA

Link : [Here](app.tea-fi.com/)
- Open link & connect metamask (New Wallet)
- Deposit 1 POL (MAINNET)
- Daily Swap POL > WPOL > tPOL no Minimum
- Claim Daily Sugar
- Done

NB :
At the end of the campaign, your Sugar Cubes will convert into Airdrop Rewards.

Source : [Twitter](https://x.com/TeaFi_Official/status/1883152850374557883?t=PyiLO35Ntms_xYB_qsd_kA&s=19)

## PREREQUISITE

- Git
- Node JS
- Wallet Funded with POL on Polygon Mainnet

## BOT FEATURE

- JUST GM

## SETUP & CONFIGURE BOT

### LINUX

1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/tea-fi-bot.git && cd tea-fi-bot
   ```
2. Install dependencies
   ```
   npm install && npm run setup
   ```
3. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
4. Configure your config
   ```
   nano config/config.js
   ```
5. To start the app run
   ```
   npm run start
   ```
   
### WINDOWS

1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/tea-fi-bot.git
   ```
   and cd to project dir
   ```
   cd tea-fi-bot
   ```
3. Install dependencies 
   ```
   npm install && npm run setup
   ```
5. Navigate to `tea-fi-bot` directory. 
6. Navigate to `accounts` and configure `accounts.js`.
7. Navigate to `config` and configure `config.js`.
8. Back to `tea-fi-bot` directory. 
9. To start the app open your `Command Prompt` or `Power Shell` again and run
    ```
    npm run start
    ```

## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```
2. Start the bot

## NOTE

DWYOR & Always use a new wallet when running the bot, I am not responsible for any loss of assets.

## LICENSE

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more details.
