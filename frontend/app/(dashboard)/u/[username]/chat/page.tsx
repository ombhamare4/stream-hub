import { getSelf } from "@/lib/auth-service";
import { getStreamById } from "@/lib/stream-service";
import ToggleCard from "./_components/toggle-card";

const ChatSettingPage = async () => {
  const self = await getSelf();
  const stream = await getStreamById(self.id);

  if (!stream) {
    throw new Error("Stream not found");
  }
  return (
    <>
      <div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold"> Chat Settings</h1>
        </div>

        <div className=" space-y-3 ">
          <ToggleCard
            field="isChatEnabled"
            label="Enable Chat"
            value={stream.isChatEnabled}
          />
          <ToggleCard
            field="isChatDelayed"
            label="Delayed Chat"
            value={stream.isChatDelayed}
          />
          <ToggleCard
            field="isChatFollowersOnly"
            label="Follower only"
            value={stream.isChatFollowersOnly}
          />
        </div>
      </div>
    </>
  );
};

export default ChatSettingPage;
