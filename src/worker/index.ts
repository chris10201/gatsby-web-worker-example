import worker from "./calculate.worker.js"

const worker2 = typeof window === "object" ? new worker() : undefined

export default worker2
