import { useEffect, useContext, useState, createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Context from "../context/Context";
import styles from "../assets/css/users.module.css";
import H2 from "../components/Typhography/H2";
import { RoundBtn } from "../components/Button/RoundButton/RoundButton";
import Table from "../components/Table";
import dataColumns from "../components/Table/data/dataTable.json";
import Modal from "../components/Modal";
import BasicBtn from "../components/Button/BassicButton";
import { InputSearch } from "../components/Input/InputSearch";
import { SelectAll } from "../components/Button/SelectAll";
import CardsTable from "../components/CardsUserTable";
import ModalNewUser from "../components/Modal/ModalNewUser";
import { CreateMessage } from "../components/Messages/MessageNewUser";
import { getUsersData, getUsersDataCards } from "../hooks/useUsers";
import { User } from "../components/Table/interface";
import { ModalDelete } from "../components/Modal/ModalDelete";
import { BtnDeleteUser } from "../components/Button/ButtonDeleteUser/ButtonDeleteUser";
import { TableContext } from "../context/TableContext";
import { MessageNewUser } from "../components/Messages/MessageNewUser/MessageNewUser";

export const UsersPage = () => {
  const { state } = useContext(TableContext)
  const { deleteUser } = state
  const { isReady } = useContext(Context);
  const [isOpenModalNewUser, setOpenModalNewUser] = useState(false)
  const [Message, setMessage] = useState(false)
  const [OpenModalDeleteUser, setOpenModalDeleteUser] = useState(false)
  const [show, setShow] = useState(true);
  const [checkAll, setcheckAll] = useState(false)
  const { isAuthenticated } = useAuth0();
  const { data, isLoading } = getUsersDataCards();
  const [successModal, setsuccessModal] = useState<{success: boolean, message: string}>()

  const handleSuccessModal = (success: boolean, message: string)=> {
    setsuccessModal({success, message})
  }
  
  useEffect(() => {
    !isOpenModalNewUser
      ?
      null
      :
      setMessage(true)
  }, [isOpenModalNewUser])

  useEffect(() => {
  }, [show]);

  if (!isReady) {
    return <></>;
  }
  
  return (
    <>
      <div className={styles.floatingBtn}>

      </div>
      <div style={{ backgroundColor: "#F8FAFC" }}>
        <div className={styles.containerUser}>
          <div className={styles.containerHeaderUsers}>
            <div className={styles.titleUsers}>
              <H2 variant="bold">Users</H2>
              <BasicBtn
                size="md"
                fontWeight={700}
                backgroundColor="var(--celeste700)"
                colorText="var(--white)"
                text="New User"
                onClick={() => { setOpenModalNewUser(true) }}
              />
            </div>
            <div className={styles.spaceText}></div>
          </div>
          <div className={styles.containerSearch}>
            <InputSearch
              size="md"
              background="var(--slate100)"
              type="text"
              text="Search Users by name or keyword..."
              icon="MagnifyingGlass"
              onChange={() => { }}
            />
            <div className={styles.roundsButton}>
              {
                deleteUser?.id && <BtnDeleteUser iconName="Trash" onClick={() => setOpenModalDeleteUser(true)} />
              }
              {
                show
                  ?
                  null :
                  <SelectAll isChecked={(checked) => setcheckAll(checked)} />
              }
              <RoundBtn
                iconName="ListDashes"
                onClick={() => setShow(true)}
                weight="regular"
                height={2}
                width={2}
                padding={0.6}
              />
              <RoundBtn
                iconName="SquaresFour"
                onClick={(show) => setShow(!show)}
                weight="regular"
                height={2}
                width={2}
                padding={0.6}
              />
              <div style={{ marginLeft: 24 }}>
                <RoundBtn
                  iconName="DotsThree"
                  weight="bold"
                  height={3}
                  width={3}
                  padding={0.1}
                />
              </div>
            </div>
          </div>

          {show ? (
            <div className={styles.containerTable}>
              <Table />
            </div>
          ) : (
            <div className={styles.containerCard}>
              {data &&
                data.list.map((item: User) => (
                  <CardsTable
                    key={item.id}
                    checked={checkAll}
                    name={`${item.name} ${item.lastname} `}
                    email={item.email}
                    phone={item.phone}
                    country={item.timezone}
                  />
                ))}
            </div>
          )}
        </div>
      </div>

      <Modal callback={(Open) => setOpenModalNewUser(Open)} isOpen={isOpenModalNewUser} >
        <ModalNewUser
          size='md'
          textHeader='New User'
          onSuccess={handleSuccessModal}
        />
      </Modal>
      {
        successModal?.success &&
        <MessageNewUser 
        message={successModal.message}
        onClick={()=>{setsuccessModal({success: false, message:''})}}/> //resetear el estado
      }


      <Modal callback={(Open) => setOpenModalDeleteUser(Open)} isOpen={OpenModalDeleteUser}>
        <div className={styles.deleteModal}>
          <ModalDelete
            title='Delete Users'
            body='The users you selected will be permanently deleted, do you want to continue?'
            user={deleteUser}
          />
        </div>
      </Modal>
    </>
  );
};