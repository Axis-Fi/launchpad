import { z } from "zod";

export const auctionInfoType = z.object({
  key: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  links: z.record(z.string().optional()).optional(),
});
