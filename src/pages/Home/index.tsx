import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import Layout from "../../components/Layout";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import { SmallButton } from "../../components/Common/Buttons";
import { GeneralModal } from "../../components/Common/Modals";
import Input from "../../components/Common/Forms/Input";
import { useEffect, useState } from "react";
import ACTIONS from '../../config/actions';
import { setLeaderboard } from "../../redux/slices/tetrisSlice";
import LeaderBoard from "../../components/Home/LeaderBoard";
import { apiCaller } from "../../utils/fetcher";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [betAmount, setBetAmount] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('betAmount', betAmount);
  }, [betAmount])

  useEffect(() => {
    const fetchLeaderboard = async () => {
      var result = await apiCaller.get('tetrises/fetchLeaderboard');
      dispatch(setLeaderboard({result: result.data.data}))
    }
    fetchLeaderboard()
    initSocket()
  }, [])

  const initSocket = () => {
    // This part is main for socket.
    if (!(window as any).socket) {
        setTimeout(() => {
          initSocket()
        }, 10)
        return
    }

    if (!(window as any).listen) {
      (window as any).socket.on('send-leaderboard', (data) => {
        dispatch(setLeaderboard(data))
      });
      (window as any).listen = true
    }
  }

  return (
    <Layout
      banner={
        <ExploreBanner />
      }
    >
      <div className="">
        <GeneralModal 
          open={modalOpen}
          title="Start a new game"
          content={
            <Input
              caption={"Input your name"}
              value={betAmount}
              setValue={setBetAmount}
              disabled={false}
            />
          }
          onClose={() => {
            setModalOpen(false);
          }}
          onConfirm={() => {
            (window as any).socket.emit('get-leaderboard', {});
            navigate('/tetris');
          }}
        />
        <div className="p-10">
          <div className="flex justify-end">
            <SmallButton 
              caption="Start a Game"
              onClick={() => {
                setModalOpen(true);
              }}
            />
          </div>
          <LeaderBoard />
        </div>
      </div>
    </Layout>
  );
}
export default Home;