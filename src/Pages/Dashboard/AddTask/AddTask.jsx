import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
 const AddTask = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        const task = {
            title: data.title,
            deadline: data.deadline,
            priority: data.priority,
            
            description: data.description,
            
        }
        const menuRes = await axiosPublic.post('/addTask', task);
        console.log(menuRes.data);
        if (menuRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pet is added",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="bg-white">
               <div className="lg:w-[600px]">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control lg:w-full gap-2 lg:ml-10 p-4  ">
                        <div className="">
                            <label className="label">
                                <span className="label-text font-bold px-2">Task Title</span>
                            </label>
                            <input {...register("title", { required: true })} type="text" placeholder="Task Title" className="input input-secondary lg:w-[450px] " />
                            <label className="label">
                                <span className="label-text font-bold px-2">Deadlines</span>
                            </label>
                            <input {...register("deadline", { required: true })} type="date" placeholder="Deadline" className="input input-secondary lg:w-[450px]  " />

                            <label className="label">
                                <span className="label-text font-bold px-2">Priority</span>
                            </label>

                            <select defaultValue="default" {...register("priority", { required: true })} className="select select-secondary lg:w-[450px]  ">
                                <option disabled value="default">Choose Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                            
                        <label className="label">
                            <span className="label-text font-bold px-2">Description</span>
                        </label>
                        <input {...register("description", { required: true })} type="text" placeholder="Description" className="input input-secondary lg:w-[450px] " />
                        </div>
                    </div>

                    <div className="mt-4 lg:ml-[350px]">
                        <button className="btn btn-error">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );
 };
 
 export default AddTask;