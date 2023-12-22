import { useLoaderData } from "react-router-dom";
import SeeTask from "./SeeTask";

const TaskList = () => {
    const task = useLoaderData();

    return (
        <div className="bg-white">
            <div>
                <div className="grid md:grid-cols-2 gap-5 m-24 bg-white">

                    {
                        task.map(taskes =><SeeTask key={taskes._id} taskes={taskes}></SeeTask>)
                    }
                </div>
               

            </div>

        </div>
    );
};

export default TaskList;