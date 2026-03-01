import { availablePlans } from "@/lib/plans";

export default function Subscribe () {
    return <div> 
        <div>
            {" "}
            <h2>
                Pricing 
            </h2> {" "}
            <p> 
                {" "}
                Get started on our weekly plan or upgrade to monthly or yearly when you&apos;re ready.
            </p>
        </div>
            {availablePlans.map((plan, keys) => (
                <div key={keys}>
                    <div>
                        {plan.isPopular && <p>Most Popular</p>}
                        <h3>{plan.name}</h3>
                        <p>
                            <span> ${plan.amount}</span> <span>/{plan.interval}</span>
                        </p>
                        <p>{plan.description}</p>
                        <ul>
                            {plan.features.map((feature, key) => (
                                <li key={key}>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="flex-shrink-0 w-6 h-6 text-emerald-500"
                                    >
                                    <polyline points="20 6 9 17 4 12" />    
                                    </svg>
                                    <span> {feature} </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button>
                        Subscribe {plan.name}
                    </button>
                </div>
            ))}
    </div>
}