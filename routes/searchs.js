const Router = require("koa-router");
const router = new Router();

const baseUri = "/searchs";

router.get(baseUri, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Searchs returned",
  };
});

router.get(`${baseUri}/:id`, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Search returned",
    data: ctx.params.id,
  };
});

router.post(baseUri, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Search create",
    data: "Search create",
  };
});

router.put(`${baseUri}/:id`, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Search edited",
    data: ctx.params.id,
  };
});

router.put(`${baseUri}/:id`, async (ctx) => {
  ctx.body = {
    status: "success",
    message: "Search edited",
    data: ctx.params.id,
  };
});

router.delete(`${baseUri}/:id`, async (ctx) => {
    ctx.body = {
      status: "success",
      message: "Search deleted",
      data: ctx.params.id,
    };
  });

module.exports = router;
