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
import { Formik, isInteger, useFormik } from "formik";
import { date, number, object, string } from "yup";
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
    phone: '',
    second_lastname: '',
    timezone: ''
  }

  const [user, setUser] = useState<IUser>(initialValues)
  const { setIsOpenModal } = useContext(ModalContext)
  const { mutate } = createUserData()

  const validationSchema = object({
    birthday: date().default(new Date('2004-12-31')).max('2004-12-31', 'La fecha no puede ser mayor a 2004').required('El año de nacimiento es obligatorio'),
    email: string().email('El email no tiene formato válido').required('El email es obligatorio'),
    name: string().required('El nombre es requerido').min(1, 'El nombre tiene que tener almenos un caracter').max(10, 'El nombre no puede superar los 10 caracteres'),
    language: string().required('Debes seleccionar un lenguaje'),
    lastname: string().required('El apellido es requerido').min(1, 'El apellido tiene que tener almenos un caracter').max(20, 'El apellido no puede superar los 20 caracteres'),
    phone: string().min(10, 'Mínimo 10 caracteres').required('El teléfono es requerido').max(10, 'El teléfono no debe superar los 10 caracteres'),
    timezone: string().required('Debes seleccionar una zona horaria'),
  })

  // const formik = useFormik<IUser>({

  // }
  // )

  function handleTypeUserChange({ isActive }: { isActive: boolean }) {
    console.log('handleType', isActive);
    setUser({ ...user, is_admin: isActive })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(useFormik, { resetForm }) => {
        resetForm()
        mutate({ ...useFormik, is_admin: user.is_admin })
        setUser(initialValues)
        setIsOpenModal(false)
        onSuccess && onSuccess(true, `Great! You've created new user`)
      }}
    >
      {({ handleBlur, values, handleSubmit, handleChange, resetForm, errors }) => (

        <form onSubmit={handleSubmit}>
          <div className={`${styles[size]} ${styles.modalContainer}`} >
            <div className={styles.headerTitle}>
              <div className={styles.containerTitle}>
                <div className={styles.iconHeader}>
                  <User size="1.6rem" color="#F97316" />
                </div>
                <p className={styles.textHeader}>{textHeader}</p>
              </div>
              <div className={styles.closeIcon}>
                <X size='2.8rem' onClick={() => { setIsOpenModal(false); resetForm() }} />
              </div>
            </div>
            <div className={styles.separationHeader}></div>
            <div className={styles.typeUser}>
              <div className={styles.textTypeUser}>
                What type of user do you want to create?
              </div>
                <ToggleButton values={['Admin', 'Editor']} onChange={handleTypeUserChange} />
            </div>

            <div className={styles.containerPersonalInformation}>
              <div className={styles.personalInfoText}>
                <p className={styles.title}>PERSONAL INFORMATION</p>
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
                onBlur={handleBlur}
                onChange={handleChange}
                name='name'
                size="lg"
                value={values.name}
                type="text"
                placeholder=""
                textTitle="Name*"
                errorMsg={errors.name}
                hasError={errors.name ? true : false}
              />

              <InputModal
                onBlur={handleBlur}
                onChange={handleChange} name='lastname'
                value={values.lastname}
                size="lg"
                type="text"
                placeholder=""
                textTitle="Last Name*"
                errorMsg={errors.lastname}
                hasError={errors.lastname ? true : false}
              />

              <div className={styles.containerBirthdayPhone}>
                <InputModal
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name='birthday'
                  value={values.birthday}
                  size="md"
                  type="date"
                  placeholder="dd/mm/aaaa"
                  textTitle="Birthday"
                  subText=" (Optional)"
                  iconCalendar="iconCalendar"
                  errorMsg={errors.birthday}
                  hasError={errors.birthday ? true : false}
                />
                <InputModal
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name='phone'
                  value={values.phone}
                  size="md"
                  type="text"
                  placeholder="ej. (442) 212 2365"
                  textTitle="Phone number*"
                  errorMsg={errors.phone}
                  hasError={errors.phone ? true : false}

                />

              </div>
            </div>
            <div className={styles.accountInformation}>
              <p className={styles.title}>ACCOUNT INFORMATION</p>
              <InputModal
                textId="email-Error"
                onBlur={handleBlur}
                onChange={handleChange}
                name='email'
                value={values.email}
                size="lg"
                type="text"
                placeholder="joss.ramirez@company.mx"
                textTitle="Email*"
                hasError={errors.email ? true : false}
                errorMsg={errors.email}
              />
              <InputSelectTime
                onBlur={handleBlur}
                onChange={handleChange}
                name='timezone'
                value={values.timezone}
                size='xl'
                textTitle='Time Zone'
                placeholder="Choose..."
                hasError={errors.timezone ? true : false}
                errorMsg={errors.timezone}
              />
              <InputSelectIdiom
                onBlur={handleBlur}
                onChange={handleChange}
                name='language'
                value={values.language}
                size='sm'
                textTitle='Language'
                placeholder="Choose..."
                hasError={errors.language ? true : false}
                errorMsg={errors.language}
              />
            </div>
            
            <div className={styles.separationFooter}></div>

            <div className={styles.containerFooter}>
              <div className={styles.inputContainer}>
                <input type="checkbox" className={styles.input} />
                <p className={styles.textInput}>Create another User</p>
              </div>
              <div className={styles.buttonFooter}>
                <BasicBtn
                  onClick={() => {
                    setIsOpenModal(false)
                    resetForm()
                  }}
                  size="sm"
                  backgroundColor="white"
                  fontWeight={700}
                  borderColor="var(--neutral300)"
                  colorText="var(--neutral900)"
                  text="Cancel"
                  type="reset"
                />
                <BasicBtn
                  size="sm"
                  backgroundColor="var(--celeste700)"
                  fontWeight={700}
                  borderColor="var(--celeste700)"
                  colorText="var(--white)"
                  text="Save"
                  type='submit'
                />
              </div>
            </div>

          </div>
        </form>
      )}
    </Formik>
  );
};

export default ModalNewUser;

ModalNewUser.defaultProps = {
  size: "md",
};