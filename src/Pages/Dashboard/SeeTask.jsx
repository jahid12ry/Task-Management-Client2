

const SeeTask = ({ taskes }) => {
    const { title ,description,deadline} = taskes
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                       
                            <th>Title</th>
                            <th>Description</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody className="col-span-1">
                       
                        <tr>
                            
                            <td>{title} </td>
                            <td>{description}</td>
                            <td>{deadline}</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default SeeTask;