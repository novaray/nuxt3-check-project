export default defineEventHandler(async event => {
  const query = getQuery(event);
  const body = await readBody(event);
  return {
    api: 'works',
    param1: query.param1,
    b: body
  };
});
