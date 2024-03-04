import Link from "next/link";
import { Card, 
        CardHeader,
        CardDescription,
        Avatar, 
        CardTitle,
        CardContent, 
        AvatarImage,
        AvatarFallback,
        Popover,
        PopoverTrigger,
        Button,
        PopoverContent,
        CommandDialog,
        CommandList,
        CommandInput,
        CommandEmpty,
        CommandGroup,
        CommandItem,
        Command} from "../ui"

import { ChevronDown } from 'lucide-react';

const productImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNPYmn2KH8UJzfoTfEHz3cNNlkfyuczHAqGJPPLBpEg&s`

export const ItemOrder = () => {
  return (
    <Card className="mt-4">
      {/* <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader> */}
      <CardContent className="grid gap-6 mt-4">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={productImg} />
              <AvatarFallback>PY</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">Papaya</p>
              <p className="text-sm text-muted-foreground">papaya desc</p>
            </div>
          </div>
          <Button>
            Agregar +1
          </Button>
        </div>
        <div>
            <Button variant="link">
            <Link href="/items">
                VER TODOS LOS ITEMS
            </Link>
            </Button> 
        </div>
      </CardContent>
    </Card>
  )
}
