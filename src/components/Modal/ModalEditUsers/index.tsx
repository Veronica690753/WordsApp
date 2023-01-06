import { PencilSimple, User, X } from "phosphor-react";
import styles from "./ModalEdit.module.css";
import Avatar from "../../Avatar";
import BasicBtn from "../../Button/BassicButton";
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ModalContext } from '../index';
import { EditProps, ModalEditProps } from "./interface";
import InputModal from "../../Input/InputModal";
import ToggleButton from "../../Button/ToggleButton";
import { updateUserData } from "../../../hooks/useUsers";
import { InputSelectTime } from "../../Input/InputModal/InputSelectType";
import { InputSelectIdiom } from "../../Input/InputModal/InputSelectIdiom";
import { TableContext } from "../../../context/TableContext";

const initialValue = {
  birthday: '',
  auth0_id: '',
  email: '',
  id: '',
  language: '',
  lastname: '',
  middlename: '',
  name: '',
  phone: '',
  second_lastname: '',
  timezone: '',
  // image: '',
  is_admin: true
}

const ModalEditUser = ({ size, textHeader, user: originalUser }: ModalEditProps) => {
  const [ userData, setUser ] = useState<EditProps>({ user: originalUser ?? initialValue})
  const { setIsOpenModalEditUser, state } = useContext(TableContext)
  const { mutate } = updateUserData()
  //  console.log(originalUser);
   
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(
      { user: { ...userData.user, [e.target.name]: e.target.value } }
    )
  }

  useEffect(() => setUser({user: originalUser ?? initialValue})
  , [state.isOpenModalEditUser])

  function handleSubmit() {    
    mutate(userData)
    setUser({ user: initialValue })
    setIsOpenModalEditUser(false)
  }

  function handleTypeUserChange({isActive}:{isActive: boolean}){
    console.log('handleType',isActive);
    setUser({user: {...userData.user, is_admin: isActive}})
    
  }


  return (
    <div className={`${styles[size]} ${styles.modalContainer}`}>
      <div className={styles.headerTitle}>
        <div className={styles.containerTitle}>
          <div className={styles.iconHeader}>
            <User size="1.6rem" color="#F97316" />
          </div>
          <p className={styles.textHeader}>{textHeader}</p>
        </div>
            <div className={styles.closeIcon}>
            <X size='2.8rem' onClick={() => setIsOpenModalEditUser(false)} />
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
            <BasicBtn
              size="sm"
              backgroundColor="var(--red400)"
              fontWeight={700}
              borderColor="var(--red400)"
              colorText="var(--white)"
              text="Delete"
            />
          </div>
        </div>

        <InputModal
          onChange={handleChange}
          size="lg"
          type="text"
          // defaultValue={originalUser?.name}
          textTitle="Name*"
          name='name'
          placeholder="Jose"
          value={userData.user.name}
        />
        <InputModal
          size="lg"
          type="text"
          textTitle="Last Name*"
          onChange={handleChange}
          name='lastname'
          placeholder="Lopez"
          value={userData.user.lastname}
        />

        <div className={styles.containerBirthdayPhone}>
          <InputModal
            size="md"
            type="date"
            textTitle="Birthday"
            subText=" (Optional)"
            onChange={handleChange}
            name='birthday'
            placeholder='22 Nov 1990'
            value={userData.user.birthday}
          />
          <InputModal
            size="md"
            type="text"
            textTitle="Phone number*"
            onChange={handleChange}
            name='phone'
            placeholder='(442) 212 2365'
            value={userData.user.phone}
          />
        </div>
      </div>

      <div className={styles.accountInformation}>
        <p className={styles.title}>ACCOUNT INFORMATION</p>
        <InputModal
          size="lg"
          type="text"
          textTitle="Email*"
          onChange={handleChange}
          name='email'
          placeholder='joss.reamirez@company.mx'
          value={userData.user.email}
          disabled={true}
        />
        <InputSelectTime
          onChange={handleChange}
          name='timezone'
          size='xl'
          textTitle='Time Zone'
          value={userData.user.timezone}
        />

        <InputSelectIdiom
          onChange={handleChange}
          name='language'
          size='xl'
          textTitle='Language'
          value={userData.user.language}
        />
      </div>
      <div className={styles.separationFooter}></div>

      <div className={styles.buttonFooter}>
        <BasicBtn
          onClick={() => setIsOpenModalEditUser(false)}
          size="sm"
          backgroundColor="white"
          fontWeight={700}
          borderColor="var(--neutral300)"
          colorText="var(--neutral900)"
          text="Cancel"
        />
        <BasicBtn
          size="sm"
          backgroundColor="var(--celeste700)"
          fontWeight={700}
          borderColor="var(--celeste700)"
          colorText="var(--white)"
          text="Save"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ModalEditUser;

ModalEditUser.defaultProps = {
  size: "md",
};