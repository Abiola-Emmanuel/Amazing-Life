import Image from "next/image"
import { motion } from "framer-motion"
import './media.css'

const Media = () => {

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      < motion.section
        className="media-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }
        }
      >
        <div className="media-grid">
          <motion.div
            className="media-card"
            variants={cardItem}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className="media-image-wrapper">
              <Image
                src='/bible.jpg'
                alt="Bible Study"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <motion.div
              className="media-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3>Bible Study</h3>
              <p>Study guides & devotionals</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="media-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="media-image-wrapper">
              <Image
                src='/sermon.png'
                alt="Sermons"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <motion.div
              className="media-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3>Sermons</h3>
              <p>Watch live sermons & teachings</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="media-card"
            variants={cardItem}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="media-image-wrapper">
              <Image
                src='/music.jpg'
                alt="Worship Music"
                fill
                className="media-image"
              />
              <div className="media-overlay"></div>
            </div>
            <motion.div
              className="media-text"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3>Worship Music</h3>
              <p>Experience uplifting worship</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section >
    </>
  )
}

export default Media