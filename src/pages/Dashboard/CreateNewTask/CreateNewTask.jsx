import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CreateNewTask = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const navigate = useNavigate();
  const [postCount, setPostCount] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const axiosSecure = useAxiosSecure();
  /*   useEffect(() => {
    const fetchPostCount = async () => {
    const res = await axiosSecure.get(`/totalPost?email=${userEmail}`)
    // console.log(res.data);
    setPostCount(res.data);   
    };

    fetchPostCount();
  }, [userEmail, axiosSecure]); */

  // console.log(postCount);

  /*   const handleCreateNewTask = (e) => {
    e.preventDefault();
   

    const form = e.target;
    const author = form.name.value;
    const authorEmail = form.authorEmail.value;
    const title = form.title.value;
    const description = form.description.value;
    const authorImage = form.authorImage.value;
    const tags = selectedTag.value;
 
   

    const newPost = {
      author,
      authorEmail,
      title,
      description,

      authorImage,
      tags,
      commentsCount: 0,

    };

    console.log(newPost);

    axiosSecure.post('/posts', newPost)
    .then(res => {
      console.log(res.data);
      if(res.data.insertedId) {
        Swal.fire(
          'Great!',
          "Post Submitted Successfully",
          'success'
        );
         form.reset();
         navigate('/dashboard/myPosts')
      }
    }
      
      )
  }; */

  /*   const tagsOptions = [
    { value: "coding", label: "coding" },
    { value: "travel", label: "travel" },
    { value: "community", label: "community" },
    { value: "technology", label: "technology" },
    { value: "books", label: "books" },
    { value: "food", label: "food" },
  ]; */

  /*   const handleChange = (tag) => {
    setSelectedTag(tag);
  }; */
  // ------------------------------------------
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (taskInfo) => {
    console.log(taskInfo);

    const taskDetails = {
      taskInfo,
      userEmail,
      list:'to-do'
    }

    axiosSecure.post('/tasks', taskDetails)
    .then(res => {
      console.log(res.data);
      if(res.data.insertedId) {
        Swal.fire(
          'Great!',
          "Task Created Successfully",
          'success'
        );
        reset();
        //  navigate('/dashboard/myPosts')
      }
    }
    )
  };
  // ---------------------------------------------
  return (
    <div className="container mx-auto mt-2">
      <div className="bg-white p-8 shadow-md rounded-md">
      {/* <SectionTitle heading={'Create your TODO'}></SectionTitle> */}

        <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
          {/* Title & Description row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Task Title</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  {...register("title")}
                  placeholder="Post Title"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>

              <label className="input-group">
                <input
                  type="text"
                  {...register("description")}
                  placeholder="Post Description"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>

          {/* Deadline &  Priority */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>

              <label className="input-group">
                <input
                  type="date"
                  {...register("deadline")}
                  placeholder="Deadline"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 md:ml-4">
              <label className="block">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>

                {/*  <Select className="py-[2px] rounded-lg" value={selectedTag} onChange={handleChange} options={tagsOptions} /> */}

                <select className="py-[12px] w-full outline-gray-200 px-4  rounded-lg border-[2px] border-gray-200" {...register("priority")}>
                  <option value="low">Low</option>
                  <option value="moderate">Modarate</option>
                  <option value="high">High</option>
                </select>
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Submit Task"
            className="btn btn-block uppercase bg-pink-600 hover:bg-pink-800 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
