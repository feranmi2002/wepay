import React from "react";
import Input from "../../../../components/input/floating-label-input";
import { Icon } from "@iconify/react";
import Dropdown from "../../../../components/dropdown/dropdown-input";
import Buttonfill from "../../../../../../components/filledbutton/buttonfill";
import { Transferschema } from "../../validation/Transferschema";
import { useFormContext } from "../../context";
import { useFormik } from "formik";

const Sendmoney = ({ onClick }) => {
  const { formData, setFormData } = useFormContext();

  const formik = useFormik({
    initialValues: {
      walletaddress: formData.walletaddress || "",
      walletname: formData.walletname || "",
      ammount: formData.ammount || "",
      remark: formData.remark || "",
    },
    validationSchema: Transferschema,
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      onClick();
    },
  });

  return (
    <form
      className="bg-white lg:w-[68.46%] w-full flex flex-col items-center gap-10 p-8 rounded-lg shadow-lg"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex items-center gap-1">
        <Icon className="text-purple text-2xl" icon="tdesign:money" />
        <h1 className="text-gd text-xl font-semibold">Send money</h1>
      </div>

      <div className="w-full h-fit grid lg:grid-cols-2 grid-cols-1 items-end gap-12">
        <Dropdown text="Currency" />

        <div className="flex flex-col gap-1">
          <Input
            name="walletaddress"
            type="text"
            label="Wallet address"
            id="wallet-address"
            value={formik.values.walletaddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.walletaddress && formik.errors.walletaddress ? (
            <h1 className="text-red text-xs text-left">{formik.errors.walletname}</h1>
          ) : null}
        </div>

        <div className="flex flex-col gap-1">
        <Input
          name="walletname"
          type="text"
          label="Wallet Name"
          value={formik.values.walletname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.walletname && formik.errors.walletname ? (
          <h1 className="text-red text-xs text-left">{formik.errors.walletname}</h1>
        ) : null}
        </div>

        <Dropdown text="Receiver currency" />

        <div className="flex flex-col gap-1">
        <Input
          name="ammount"
          type="text"
          label="Amount"
          value={formik.values.ammount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.ammount && formik.errors.ammount ? (
          <h1 className="text-red text-xs text-left">{formik.errors.ammount}</h1>
        ) : null}
        </div>

        <div className="flex">
        <Input
          name="remark"
          type="text"
          label="Remark"
          value={formik.values.remark}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.remark && formik.errors.remark ? (
          <h1 className="text-red text-xs text-left">{formik.errors.remark}</h1>
        ) : null}
        </div>
      </div>

      <Buttonfill type="submit" text="Next" />
    </form>
  );
};

export default Sendmoney;
