import * as v from "valibot";

const GetAuctionParamsSchema = v.object({
  lotId: v.number(),
  chainId: v.number(), // TODO: limit to deployment chainIds?
});

const GetAuctionTokenDecimalsParamsSchema = GetAuctionParamsSchema;

export { GetAuctionParamsSchema, GetAuctionTokenDecimalsParamsSchema };
