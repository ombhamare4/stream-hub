"use client";

import { updateStream } from "@/actions/stream";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProp {
  field: FieldTypes;
  label: string;
  value: boolean;
}

const ToggleCard = ({ field, label, value }: ToggleCardProp) => {
  const [isPending, startTransition] = useTransition();

  const onChange = async () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => {
          toast.success("Chat Setting Updated");
        })
        .catch((e) => {
          toast.error(e);
        });
    });
  };

  return (
    <>
      <div className="rounded-xl bg-muted p-5 w-full">
        <div className="flex items-center justify-between">
          <p className="font-semibold shrink-1"> {label}</p>
          <div>
            <Switch
              disabled={isPending}
              onCheckedChange={onChange}
              checked={value}
            >
              {value ? "On" : "Off"}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleCard;

export const ToggleCardSkeleton = () => {
  return (
    <>
      <Skeleton className="rounded-xl p-5 w-full" />
    </>
  );
};
