// import amqp from 'amqplib';
// import _ from 'lodash';

// // eslint-disable-next-line no-use-before-define
// let instance: Promise<MessageBroker>;

// class MessageBroker {
//   public connection!: amqp.Connection;
//   public queues;
//   public channel!: {
//     assertQueue: (
//       arg0: any,
//       arg1: { durable: boolean; }) => any;
//       sendToQueue: (arg0: any, arg1: any) => void;
//       consume: (arg0: any, arg1: (msg: any) => Promise<void>
//     ) => void; ack: (arg0: any) => any;
//   };

//   constructor () {
//     this.queues = {};
//   }

//   static async getInstance () {
//     if (!instance) {
//       const broker = new MessageBroker();
//       instance = await broker.init();
//     }
//     return instance;
//   }

//   async init () {
//     this.connection = await amqp.connect(
//       process.env.RABBITMQ_URL || 'amqp://localhost'
//     );
//     this.channel = await this.connection.createChannel();
//     return this;
//   }

//   async send (queue: any, msg: any) {
//     if (!this.connection) {
//       await this.init();
//     }
//     await this.channel.assertQueue(queue, { durable: true });
//     this.channel.sendToQueue(queue, msg);
//   }

//   async subscribe (queue: string | number, handler: any) {
//     if (!this.connection) {
//       await this.init();
//     }
//     if (this.queues[queue]) {
//       const existingHandler = _.find(this.queues[queue], h => h === handler);
//       if (existingHandler) {
//         return () => this.unsubscribe(queue, existingHandler);
//       }
//       this.queues[queue].push(handler);
//       return () => this.unsubscribe(queue, handler);
//     }

//     await this.channel.assertQueue(queue, { durable: true });
//     this.queues[queue] = [handler];
//     this.channel.consume(
//       queue,
//       async (msg: any) => {
//         const ack = _.once(() => this.channel.ack(msg));
//         this.queues[queue].forEach(
//           (h: (arg0: any, arg1: () => any) => any) => h(msg, ack)
//         );
//       }
//     );
//     return () => this.unsubscribe(queue, handler);
//   }

//   async unsubscribe (queue: string | number, handler: any) {
//     _.pull(this.queues[queue], handler);
//   }
// }

// export default MessageBroker;
