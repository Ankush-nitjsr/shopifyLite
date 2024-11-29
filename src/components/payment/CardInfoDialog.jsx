import Button from "../../ui/buttons/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  ChevronRightIcon,
  CreditCardIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { CardImages } from "./CardImages";
import { Separator } from "../../ui/separator";

export function CardInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <PlusIcon className="w-6 h-6" />
          <CreditCardIcon className="w-6 h-6" />
          <span className="flex items-center text-blue-400">
            Enter card details <ChevronRightIcon className="w-3 h-3" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Enter card details</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center space-x-4">
          <div className="grid gap-4 py-4 flex-1">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="cardNumber" className="text-right">
                Card number
              </Label>
              <Input id="cardNumber" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="nickname" className="text-right">
                Nickname
              </Label>
              <Input
                id="nickname"
                defaultValue="emily"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="expiryDate" className="text-right">
                Expiry date
              </Label>
              <Input
                id="expiryDate"
                defaultValue="@peduarte"
                className="col-span-2"
              />
            </div>
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col space-y-2 w-[40%]">
            <DialogDescription>
              Please ensure that you enable your card for online payments from
              your bank’s app.
            </DialogDescription>
            <CardImages />
          </div>
        </div>
        <DialogFooter>
          <DialogClose className="px-3 py-2 bg-white text-gray border border-gray-400 rounded-3xl hover:bg-gray-100 focus:ring-2 focus:ring-gray-300">
            Cancel
          </DialogClose>
          <Button
            type="submit"
            className="rounded-3xl bg-yellow-400 text-gray hover:bg-yellow-500"
          >
            Enter card details
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
