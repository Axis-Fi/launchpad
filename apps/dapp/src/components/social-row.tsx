import {
  cn,
  Link,
  DiscordLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
} from "@repo/ui";

export type SocialURLs = {
  discord?: string;
  twitter?: string;
  website?: string;
  className?: string;
  iconClassName?: string;
};

export function SocialRow(props: SocialURLs) {
  return (
    <div className={cn("flex h-9 items-center gap-x-4 pl-2", props.className)}>
      {props.twitter && (
        <Link href={props.twitter}>
          <TwitterLogoIcon
            className={cn("size-8 hover:text-[#1DA1F2]", props.iconClassName)}
          />
        </Link>
      )}

      {props.discord && (
        <Link href={props.discord}>
          <DiscordLogoIcon
            className={cn("size-8 hover:text-[#7289da]", props.iconClassName)}
          />
        </Link>
      )}
      {props.website && (
        <Link href={props.website}>
          <GlobeIcon
            className={cn(
              "hover:text-primary size-8 transition-all",
              props.iconClassName,
            )}
          />
        </Link>
      )}
    </div>
  );
}
