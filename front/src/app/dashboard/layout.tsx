import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>Dashboard</nav>
        {children}
      </section>
    )
  }