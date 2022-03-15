/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const codeCoverageTask = require('@cypress/code-coverage/task')
const { startDevServer } = require('@cypress/vite-dev-server')
const istanbul = require('vite-plugin-istanbul')

module.exports = (on, config) => {
    on('dev-server:start', options =>
        startDevServer({
            options,
            viteConfig: {
                clearScreen: false,
                plugins: [istanbul({})]
            }
        })
    )

    codeCoverageTask(on, config)
    return config
}
