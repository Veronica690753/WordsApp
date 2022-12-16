import { User } from "phosphor-react";
import styles from "./ModalNewUser.module.css";
import Avatar from "../../Avatar";
import { ModalContext } from '../index';
import BasicBtn from "../../Button/BassicButton";
import InputModal from "../../Input/InputModal";
import { ChangeEvent, useContext, useState } from "react";
import { ModalNewProps } from "./interface";
import ToggleButton from "../../Button/ToggleButton";
import { createUserData } from "../../../hooks/useUsers";
import { IUser } from "../../../interface/FetchAllUserResponse";

const ModalNewUser = ({ size, textHeader }: ModalNewProps) => {

  const initialValue = {
    birthday:       '',
    email:          '',
    name:           '',
    id:             '',
    id_auth0:       '',
    lastname:       '',
    second_lastname:'',
    middlename:     '',
    phone:          '',
    timezone:       '',
    language:       ''
    // is_admin:       true,
    // image:          ''
  }

  const [user, setUser] = useState<IUser>(initialValue)

  const { setIsOpenModal } = useContext(ModalContext)
  const { mutate } = createUserData()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(
      { ...user, [e.target.name]: e.target.value }
    )
  }
function handleSubmit() {
  mutate(user)
  setUser(initialValue)
 setIsOpenModal(false) 

}

  return (
    <div
      className={`${styles[size]} ${styles.modalContainer}`}
    >
      <div className={styles.containerTitle}>
        <div className={styles.iconHeader}>
          <User size="1.6rem" color="#F97316" />
        </div>
        <p className={styles.textHeader}>{textHeader}</p>
      </div>
      <div className={styles.separationHeader}></div>
      <div className={styles.typeUser}>
        <div className={styles.textTypeUser}>
          What type of user do you want to create?
        </div>
        <ToggleButton values={['Admin', 'Editor']} />
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
          onChange={handleChange}
          name='name'
          size="lg"
          value={user.name}
          type="text"
          text="Jose"
          textTitle="Name*" />
        <InputModal 
          value={user.lastname}
          onChange={handleChange}
          name='lastname'
          size="lg"
          type="text"
          text="Ramirez"
          textTitle="Last Name*"
        />
        <InputModal
          onChange={handleChange}
          name='second_lastname'
          value={user.second_lastname}
          size="lg"
          type="text"
          text="Ramirez"
          textTitle="Second last name*"
        />
        <div className={styles.containerBirthdayPhone}>
          <InputModal
            onChange={handleChange}
            name='birthday'
            value={user.birthday}
            size="md"
            type="date"
            text="Ramirez"
            textTitle="Birthday"
          />
          <InputModal
            onChange={handleChange}
            name='phone'
            value={user.phone}
            size="md"
            type="text"
            text="(442) 212 2365"
            textTitle="Phone number*"
          />
        </div>
      </div>
      <div className={styles.accountInformation}>
        <p className={styles.title}>ACCOUNT INFORMATION</p>
        <InputModal
          onChange={handleChange}
          name='email'
          value={user.email}
          size="lg"
          type="text"
          text="joss.ramirez@company.mx"
          textTitle="Email*"
        />
        <InputModal
          onChange={handleChange}
          name='timezone'
          value={user.timezone}
          size="lg"
          type="text"
          text="Mexico City (GMT-5)"
          textTitle="Timezone"
        />
        <InputModal
          onChange={handleChange}
          name='language'
          value={user.language}
          size="md"
          type="text"
          text="Mexico City (GMT-5)"
          textTitle="Language"
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
          onClick={handleSubmit}
          size="sm"
          backgroundColor="var(--celeste700)"
          fontWeight={700}
          borderColor="var(--celeste700)"
          colorText="var(--white)"
          text="Save"
        />
      </div>
    </div>
  );
};

export default ModalNewUser;

ModalNewUser.defaultProps = {
  size: "md",
};