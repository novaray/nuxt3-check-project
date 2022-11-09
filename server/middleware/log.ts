export default defineEventHandler(event => {
  console.log(`new Req: ${event.req.url}` );
});
