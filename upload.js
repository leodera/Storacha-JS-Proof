import * as Client from '@storacha/client'
import { filesFromPaths } from 'files-from-path'

// --- Your Account Email ---
const YOUR_EMAIL = 'pascalchidera21@gmail.com'
const FILE_TO_UPLOAD = 'test-file.txt'

async function run() {
  try {
    console.log('1. Initializing Storacha Client...')
    const client = await Client.create()

    console.log('2. Logging in and using existing credentials...')
    await client.login(YOUR_EMAIL) 

    console.log(`3. Preparing file for upload: ${FILE_TO_UPLOAD}`)
    const files = await filesFromPaths([FILE_TO_UPLOAD])

    console.log('4. Executing uploadDirectory...')
    const cid = await client.uploadDirectory(files)

    const gatewayUrl = `https://storacha.link/ipfs/${cid}`

    console.log('\n✅ UPLOAD SUCCESSFUL!')
    console.log(`IPFS CID: ${cid}`)
    console.log(`Gateway URL: ${gatewayUrl}`)
  } catch (error) {
    console.error('\n❌ AN ERROR OCCURRED:')
    console.error(error)
  }
}

run()
