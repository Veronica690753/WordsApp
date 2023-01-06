import { User, X } from "phosphor-react";
import styles from "./ModalNewUser.module.css";
import Avatar from "../../Avatar";
import { ModalContext } from '../index';
import { useContext, useState, ChangeEvent } from 'react';
import { ModalNewProps } from "./interface";
import { IUser } from "../../../interface/FetchAllUserResponse";
import { createUserData } from '../../../hooks/useUsers';
import ToggleButton from "../../Button/ToggleButton";
import BasicBtn from "../../Button/BassicButton";
import InputModal from "../../Input/InputModal";
import { InputSelectTime } from "../../Input/InputModal/InputSelectType";
import { InputSelectIdiom } from "../../Input/InputModal/InputSelectIdiom";
import { CreateMessage } from "../../Messages/MessageNewUser";
import { useFormik } from "formik";
import { date, object, string } from "yup";
import { MessageNewUser } from "../../Messages/MessageNewUser/MessageNewUser";

const ModalNewUser = ({ size, textHeader, onSuccess }: ModalNewProps) => {

  const initialValues = {
    auth0_id: '',
    birthday: '',
    email: '',
    id: '',
    image: '',
    is_admin: true,
    language: '',
    lastname: '',
    middlename: '',
    name: '',
    phone: 0,
    second_lastname: '',
    timezone: ''
  }

  const [user, setUser] = useState<IUser>(initialValues)
  const { setIsOpenModal } = useContext(ModalContext)
  const { mutate } = createUserData()

  const validationSchema = object({
    birthday: date().default(new Date('2004-12-31')).max('2004-12-31','La fecha no puede ser mayor a 2004').required('El año de nacimiento es obligatorio'),
    email: string().email('El email no tiene formato válido').required('El email es obligatorio'),
    name: string().required('El nombre es requerido').min(1, 'El nombre tiene que tener almenos un caracter').max(10, 'El nombre no puede superar los 10 caracteres'),
    language: string().required('Debes seleccionar un lenguaje'),
    lastname: string().required('El apellido es requerido').min(1, 'El apellido tiene que tener almenos un caracter').max(20, 'El apellido no puede superar los 20 caracteres'),
    phone: string().min(10, 'Mínimo 10 caracteres').required('El teléfono es requerido').max(10, 'El teléfono no debe superar los 10 caracteres'),
    timezone: string().required('Debes seleccionar una zona horaria'),
  })

  const formik = useFormik<IUser>({
    initialValues,
    validationSchema,
    onSubmit: useFormik => {
      mutate({...useFormik, is_admin: user.is_admin})
      // console.log('onsubmit',user);      
      setUser(initialValues)
      setIsOpenModal(false)
      onSuccess && onSuccess(true, `Great! You've created new user`)
    }
  }
  )

  function handleTypeUserChange({isActive}:{isActive: boolean}){
    console.log('handleType',isActive);
    setUser({...user, is_admin: isActive})
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`${styles[size]} ${styles.modalContainer}`}
      >
        <div className={styles.headerTitle}>
          <div className={styles.containerTitle}>
            <div className={styles.iconHeader}>
              <User size="1.6rem" color="#F97316" />
            </div>
            <p className={styles.textHeader}>{textHeader}</p>
          </div>
          <div className={styles.closeIcon}>
            <X size='2.8rem' onClick={() => setIsOpenModal(false)} />
          </div>
        </div>
        <div className={styles.separationHeader}></div>
        <div className={styles.typeUser}>
          <div className={styles.textTypeUser}>
            What type of user do you want to create?
          </div>
          <div className={styles.toggleUser}>
            <ToggleButton values={['Admin', 'Editor']} onChange={handleTypeUserChange}/>
          </div>
        </div>

        <div className={styles.containerPersonalInformation}>
          <div className={styles.personalInfoText}>
            <p className={styles.title}>PERSONAL INFORMATION</p>
            <p className={styles.infoReq}>* Information required</p>
          </div>
          <p className={styles.profilePicture}>Profile Picture</p>
          <div className={styles.containerChangePicture}>
            <Avatar
              size="xl"
              imageSrc="https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg"
            />
            <div className={styles.containerChangePictureBtn}>
              <BasicBtn
                size="lg"

                backgroundColor="white"
                fontWeight={700}
                borderColor="var(--neutral300)"
                colorText="var(--neutral900)"
                text="Upload New Picture"
              />
            </div>
          </div>
          <InputModal
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name='name'
            size="lg"
            value={formik.values.name}
            type="text"
            placeholder=""
            textTitle="Name*"
            errorMsg={formik.errors.name}
            hasError={formik.errors.name ? true : false}
          />

          <InputModal
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} name='lastname'
            value={formik.values.lastname}
            size="lg"
            type="text"
            placeholder=""
            textTitle="Last Name*"
            errorMsg={formik.errors.lastname}
            hasError={formik.errors.lastname ? true : false}
          />

          <div className={styles.containerBirthdayPhone}>
            <InputModal
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
              name='birthday'
              value={formik.values.birthday}
              size="md"
              type="date"
              placeholder="dd/mm/aaaa"
              textTitle="Birthday"
              subText=" (Optional)"
              iconCalendar="iconCalendar"
              errorMsg={formik.errors.birthday}
              hasError={formik.errors.birthday ? true : false}
            />
            <InputModal
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name='phone'
              value={formik.values.phone}
              size="md"
              type="number"
              placeholder="ej. (442) 212 2365"
              textTitle="Phone number*"
              errorMsg={formik.errors.phone}
              hasError={formik.errors.phone ? true : false}
              inputNumber={'if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;'}
            />

          </div>
        </div>
        <div className={styles.accountInformation}>
          <p className={styles.title}>ACCOUNT INFORMATION</p>
          <InputModal
             textId="email-Error"
             onBlur={formik.handleBlur}
             onChange={formik.handleChange}
            name='email'
            value={formik.values.email}
            size="lg"
            type="text"
            placeholder="joss.ramirez@company.mx"
            textTitle="Email*"
            hasError={formik.errors.email ? true : false}
            errorMsg={formik.errors.email}
          />
          <InputSelectTime
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name='timezone'
            value={formik.values.timezone}
            size='xl'
            textTitle='Time Zone'
            placeholder="Choose..."
            hasError={formik.errors.timezone ? true : false}
            errorMsg={formik.errors.timezone}
          />
          <InputSelectIdiom
          onBlur={formik.handleBlur}
           onChange={formik.handleChange}
            name='language'
            value={formik.values.language}
            size='sm'
            textTitle='Language'
            placeholder="Choose..."
            hasError={formik.errors.language ? true : false}
            errorMsg={formik.errors.language}
          />
        </div>
        <div className={styles.separationFooter}></div>
        <div className={styles.inputContainer}>
          <input type="checkbox" className={styles.input} />
          <p className={styles.textInput}>Create another User</p>
        </div>
        <div className={styles.buttonFooter}>
          <BasicBtn
            onClick={() => setIsOpenModal(false)}
            size="sm"
            backgroundColor="white"
            fontWeight={700}
            borderColor="var(--neutral300)"
            colorText="var(--neutral900)"
            text="Cancel"
          />
          <BasicBtn
            // onClick={alertMessage}
            size="sm"
            backgroundColor="var(--celeste700)"
            fontWeight={700}
            borderColor="var(--celeste700)"
            colorText="var(--white)"
            text="Save"
          />
        </div>
      </div>
    </form>

  );
};

export default ModalNewUser;

ModalNewUser.defaultProps = {
  size: "md",
};