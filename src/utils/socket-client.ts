import { io } from 'socket.io-client'

const socket = () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transport: ['websocket'],
        secure: true,
        rejectUnauthorized: false,
    }
    return io(
        'https://solarity-backend.herokuapp.com',
        options
    )
}
export default socket
