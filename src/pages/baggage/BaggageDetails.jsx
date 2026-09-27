import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/axios';
import { toast } from 'sonner';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { SquarePen, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const BaggageDetails = () => {

  const { id } = useParams();

  const [baggages, setBaggages] = useState([]);

  const [dependency, setDependency] = useState(0);

  useEffect(() => {
    const fetchBaggages = async () => {
      try {
        const response = await api.get(`/${id}/baggages`);
        setBaggages(response.data);
      } catch (error) {
        toast.error(error.message || "Some error occurred while fetching baggages");
      }
    }
    fetchBaggages();
  }, [dependency])

  const addBaggage = async () => {
    const name = document.getElementById("baggageInput");

    try {
      const response = await api.post(`/${id}/baggages`, { name: name.value });

      if (response.status === 201) {
        toast.success("Baggage added successfully");
        name.value = "";
        setDependency(dependency + 1);
      } else {
        toast.error("Error while adding baggage");
      }
    } catch (error) {
      toast.error(error.message || "error occurred while adding baggage");
      console.log(error.message);
    }
  }

  const onDelete = async (baggageId) => {
    try {
      const response = await api.delete(`/${id}/baggages/${baggageId}`);
      if (response.status === 200) {
        toast.success("Baggage deleted successfully");
        setDependency(dependency + 1);
      } else {
        toast.error("Some error occured while deleting baggage");
      }
    } catch (error) {
      toast.error(error.message || "error while deleting baggage");
      console.log(error);
    }
  }

  // onEdit
  const onCheck = async (baggageId, completed) => {
    try {
      const response = await api.patch(`/${id}/baggages/${baggageId}`, { completed: !completed });
      if (response.status === 200) {
        toast.success("Baggage packed successfully");
        setDependency(dependency + 1);
      } else {
        toast.error("Some error occured while packed baggage");
      }
    } catch (error) {
      toast.error(error.message || "error while packed baggage");
      console.log(error);
    }
  }

  return (
    <div className='px-20 py-24'>
      <Card>

        <CardHeader className="border-b">
          <CardTitle>See Baggages for this trip</CardTitle>
          <CardDescription>View and manage baggages.</CardDescription>
          <CardAction>
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button>Add Baggage</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                  <DialogHeader>
                    <DialogTitle>Add Baggage</DialogTitle>
                    <DialogDescription>
                      Provide the baggage details and click save to add it to this trip.
                    </DialogDescription>
                  </DialogHeader>

                  <div>
                    <Label htmlFor="baggageInput" className="mb-2">Name of item</Label>
                    <Input type="text" placeholder="Medicine" id="baggageInput" />
                  </div>

                  <Button type="button" onClick={addBaggage} className="w-full">Submit</Button>

                </DialogContent>
              </form>
            </Dialog>
          </CardAction>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-3 gap-6">

            {
              baggages.length === 0
                ?
                <div className="text-xl font-semibold">No baggages to show, create one first.</div>
                :
                baggages.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className={`border rounded p-4 flex items-center justify-between ${item.completed ? "bg-green-100" : "bg-red-100"}`}
                    >

                      <div className="flex items-center gap-2">
                        <Checkbox
                          onCheckedChange={() => onCheck(item._id, item.completed)}
                          checked={item.completed}
                        />
                        <p className="text-lg font-medium">{item.name}</p>
                      </div>

                      <div className="space-x-2">
                        <Button variant="outline" size="icon"> <SquarePen /></Button>

                        <Button onClick={() => onDelete(item._id)} variant="outline" size="icon"> <Trash2 className="text-red-700" /></Button>
                      </div>

                    </div>
                  )

                })
            }

          </div>
        </CardContent>

        <CardFooter>
          <p>Total baggage: {baggages.length}</p>
        </CardFooter>
      </Card>

    </div>
  )
}

export default BaggageDetails