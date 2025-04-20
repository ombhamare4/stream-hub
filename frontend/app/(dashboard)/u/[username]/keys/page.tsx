import { Button } from "@/components/ui/button";
import { UrlCard } from "./_components/url-card";
import { KeyCard } from "./_components/key-card";
import { getSelf } from "@/lib/auth-service";
import { getStreamById } from "@/lib/stream-service";
import { ConnectModal } from "./_components/connect-modal";

const KeysPage = async () => {
  const self = await getSelf();
  const stream = await getStreamById(self.id);

  if (!stream) {
    throw new Error("Internal Server Error");
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Keys & URLs</h1>
        {/* <Button variant="primary" className=" font-semibold">
          Generate
        </Button> */}
        <ConnectModal/>
      </div>
      <div className="space-y-4">
        <UrlCard value={stream.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </>
  );
};

export default KeysPage;
