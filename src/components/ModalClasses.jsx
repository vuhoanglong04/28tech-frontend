"use client";

import { Button, Label, Modal, Radio, List } from "flowbite-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { useUserContext } from "../contexts/UserContext";

export function ModalClasses({ showClasses, hideClasses, classes, course }) {
  const [selectedClass, setSelectedClass] = useState(null);
  const { cart, addToCart, removeFromCart, refreshToken } = useUserContext();

  const handleClassChange = (event) => {
    const { value, dataset } = event.target;
    setSelectedClass({
      id: value,
      name: dataset.name,
    });
  };

  const handleAddToCart = () => {
    if (selectedClass == null) {
      alert("Hãy chọn lớp học");
      return;
    }

    addToCart({
      class_id: selectedClass.id,
      class_name: selectedClass.name,
      course_id: course.id,
      course_name: course.course_name,
      price: course.discount,
      image: course.image,
    });
  };

  return (
    <>
      <div
        className={`${
          showClasses ? "fixed" : "hidden"
        } inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center`}
      >
        <Modal show={showClasses} size="md" onClose={hideClasses} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white">
                Chọn lớp học
              </h2>
              {classes.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center gap-3">
                    <Radio
                      id={item.id}
                      name="class"
                      value={item.id}
                      data-name={item.class_name}
                      onChange={handleClassChange}
                    />
                    <Label htmlFor={item.id}>{item.class_name}</Label>
                  </div>
                  <List className="ml-5">
                    <List.Item icon={HiCheckCircle}>
                      <strong className="mr-2">Ngày khai giảng: </strong>
                      {item.date_start}
                    </List.Item>
                    <List.Item icon={HiCheckCircle}>
                      <strong className="mr-2">Lịch học: </strong>{" "}
                      {item.schedule}
                    </List.Item>
                    <List.Item icon={HiCheckCircle}>
                      <strong className="mr-2">Giờ học: </strong>{" "}
                      {item.time_study}
                    </List.Item>
                  </List>
                </div>
              ))}
              <div className="w-full">
                <Button className="bg-blue-primary" onClick={handleAddToCart}>
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
