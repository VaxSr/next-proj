import { handleSubmission } from "@/app/action";
import { SubmitButton } from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePage() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                name="title"
                required
                type="text"
                placeholder="Insert title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea name="content" required placeholder="Insert Content" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input name="url" required placeholder="Inser Image Url" />
            </div>
            <SubmitButton></SubmitButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
